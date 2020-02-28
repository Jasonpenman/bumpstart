<template>
  <v-container class="black lighten-5">
    <h2>Easy Express generator</h2>
    <v-row no-gutters>
      <v-col>
        <template>
          <v-col>
            <v-text-field v-model="options.value" v-bind:placeholder="options.value" @focus="updateHelp(options.name)"
              @blur="updateHelp()" @keyup="updateHelp(options.name)" label="PORT"></v-text-field>
          </v-col>
          <v-col>

            <v-switch v-model="accessControlAll" class="ma-2" label="Enable Access control to all origins"
              @focus="updateHelp('Access')" @change="updateHelp('Access')"  @mouseleave="updateHelp()">
            </v-switch>
            <v-switch v-model="useMongoose" class="ma-2" label="Using mongoose?" @mouseenter="updateHelp()" @focus="updateHelp('mongoose')" ></v-switch>
            <transition name="bounce">
              <v-text-field v-if="useMongoose" v-model="mongooseUrl" placeholder="Paste your mongoose url"
                @focus="updateHelp('mongoose')" @blur="updateHelp()" @keyup="updateHelp('mongoose')"
                label="Mongoose URL">
              </v-text-field>
            </transition>
          </v-col>
          <transition name="bounce">
            <v-select class="pa-4" @focus="updateHelp('serverGetOptions')" @blur="updateHelp()"
              @change="updateHelp('serverGetOptions')" v-model="serverGetOptions" :items="serverGetList"
              label="Allowed request types" multiple hint="" persistent-hint></v-select>
          </transition>
          <v-expansion-panels class="pa-4">
            <h3 class="text-left light">Endpoints
              <v-btn class="float-right mb-4" fab dark small top right @click="dialog = !dialog">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </h3>

            <v-expansion-panel v-for="item in endpoints" :key="item.key" class="mb-2">
              <v-expansion-panel-header class="text-left left">
                {{ item.key }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
              

                <code spellcheck="false" contenteditable="true" class="lang-bash"
                  @blur="updateEndpointValue($event, item.key)">  <v-btn class="float-right ma-1" fab color="red darken-4" small outlined top right
                  @click="removeEndpoint(item)">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>{{ item.value }}</code>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
      </v-col>
      <v-col class="pa-4">
        <p>Example code below</p>
        <pre class="lang-bash prettyprint">{{ example | tidy }} </pre>

     <v-card-text class="mt-6 pa-4 dark-text">
   <v-expansion-panels>
     <v-expansion-panel class="mb-2">
        <v-expansion-panel-header class="text-left left">
          Instructions
        </v-expansion-panel-header>
          <v-expansion-panel-content>
  
            <v-card-text class="small-text">Enter your desired port<br>
              Enable access control all origins adds changes to help prevent cors issues,<br>
              Using mongoose adds the mongoose import and adds the connect function, just paste in your mongo.db url,<br>
              Allowed request types sets up express to listen for each request type, toggle the ones you require,<br>
              Click the <v-btn fab dark small class="tiny"> 
            <v-icon class="tiny">mdi-plus</v-icon>
            </v-btn>  to add a new endpoint/route,<br> 
            clicking the endpoint then allows you to edit the code that runs when the endpoint is reached,<br>
            Create express server will download your server.js file, add it to your project and run with node.<br><br>
            Dont forget to run "npm i express" and if you are using mongoose run "npm i mongoose" in the project folder
            </v-card-text>
         </v-expansion-panel-content>
       </v-expansion-panel>
      </v-expansion-panels>
        <v-card-text>BumpStart creates a simple express server form the details entered, you can add custom routes and edit the code each route uses. 
          BumpStart only creates basic server.js files but is eneough to generate a starting point for your server and saves having to remember everything.<br>
          BumpStart was written in around a day as a quick example of my work.</v-card-text>
          <v-card-text>Jason Penman</v-card-text>
     </v-card-text>

      </v-col>
    </v-row>
    <v-btn class="ma-4" @click="saveFile()">Create express server</v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
          <v-text-field label="Endpoint name" v-model="newEndpointName" autofocus
            @keyup.enter="dialog = false, addEndpoint()"></v-text-field>
          <small class="grey--text">* Adds default example function, edit after saving</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dialog = false, addEndpoint()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>

</template>

<script>
  import downloadFile from '../js/download';
  export default {
    name: 'express',
    data: () => ({
      dialog: false,
      newEndpointName: '',
      options: {
        name: "PORT",
        value: "3000"
      },
      accessControlAll: false,
      serverGetList: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      serverGetOptions: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      dbAddress: {
        DB: 'your db addres goes here'
      },
      endpoints: [{
        key: '/',
        value: `(req, res) => {
        res.status(200).send('Hello World!')}`
      }],
      defaultEndpointValue: `(req, res) => {
        res.status(200).send('Hello World!')}`,
      example: '',
      useMongoose: false,
      mongooseUrl: '',
      finalData: {}
    }),
    props: {
      msg: String
    },
    filters: {
      tidy: (value) => {
        if (!value) return ''
        return value.replace(/ +(?= )/g, '')
      }
    },
    methods: {
      addEndpoint() {
        // adds slash to endpont name if missing
        this.newEndpointName.indexOf('/') ?
          this.newEndpointName = '/' + this.newEndpointName :
          this.newEndpointName

        if (this.newEndpointName && !this.endpoints.some(endpoint => endpoint.key === this.newEndpointName)) {
          this.endpoints.push({
            key: this.newEndpointName,
            value: this.defaultEndpointValue
          })
          this.endpoints.sort((a, b) => a.key.localeCompare(b.key));
        }
        return this.newEndpointName = ''
      },
      removeEndpoint(item) {
        this.endpoints = this.endpoints.filter(endpoint => endpoint.key !== item.key)
      },
      updateEndpointValue(event, key) {
        // workaround for v-html not being 2 way, pre tag doesnt support v-model
        this.endpoints.find(endpoint => endpoint.key == key).value = event.target.innerText;
      },
      async saveFile() {
        await this.buildData();
        downloadFile(JSON.stringify(this.finalData));
      },
      updateHelp(hType) {
        switch (hType) {
          case 'PORT':
            this.example = `app.set('port', ${this.options.value});`;
            break
          case 'mongoose':
            this.example = `mongoose.connect("${this.mongooseUrl}")
                            .then(() => {
                              console.log('connected to databse');
                            })
                            .catch(() => {
                              console.log("db connection failed");
                            });`
            break
          case 'serverGetOptions':
            this.example = ` res.setHeader(
                             'Access-Control-Allow-Methods',
                             ${this.serverGetOptions.map(r => '"' + r + '"')});
                            `;
            break
          case 'Access':
            this.example = `  // Allow access from anywhere
                              res.setHeader('Access-Control-Allow-Origin', '*');
                              res.setHeader('Access-Control-Allow-Headers',
                            'Origin, X-Requested-With, Content-Type, Accept, Authorization');`;
            break
          default:
            this.example = '';
        }
      },
      async buildData() {
        let data = {}
        this.options.value ? data.port = this.options.value : null
        this.endpoints ? data.endpoints = this.endpoints : null
        this.useMongoose ? data.mongooseUrl = this.mongooseUrl : null
        this.serverGetOptions ? data.gets = this.serverGetOptions : null
        data.accessControl = this.accessControlAll
        localStorage.setItem('server', JSON.stringify(data));
        this.finalData = data;
      },
      reloadData(data) {
        this.options.value = data.port
        data.mongooseUrl ? this.mongooseUrl = data.mongooseUrl : null
        data.mongooseUrl ? this.useMongoose = true : null
        data.endpoints ? this.endpoints = data.endpoints : null
        data.gets ? this.serverGetOptions = data.gets : null
        this.accessControlAll = data.accessControl
      },
      clearStorage() {
        localStorage.setItem('server', null);
      },
    },
    mounted() {
      if (localStorage.getItem('server').includes('port')) {
        this.reloadData(JSON.parse(localStorage.getItem('server')))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
 font-weight: 200; 
}
  h3 {
    text-align: center;
    width: 100%;
  }

  .w-100 {
    width: 100%;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .lang-bash {
    background-color: #222;
    width: 100%;
    padding: 20px;
    color: greenyellow;
    border-radius: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
    text-decoration: none;
    text-decoration-style: none;
    text-decoration-color: transparent;
  }
  .dark-text{
    color: #cccccc;
  }
  
  .dark-text .v-card__text {
    font-size: 18px;
    line-height: 26px;
    text-align: justify;
    font-weight: 200;
  }
  
  .light {
    font-weight: 200;
  }

  .tiny {
    font-size: 10px;
    height: 14px !important;
    width: 14px !important;
    margin-top: -2px;
  }

  .small-text {
    font-size: 14px !important;
    font-weight: 400 !important;
  }
  div .v-list-item__action {
    display: none !important;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1);
    }
  }

</style>