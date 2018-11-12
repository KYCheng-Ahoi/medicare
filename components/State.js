import { Container } from 'unstated'
import PouchDB from 'pouchdb-react-native'

type DbState = {
  plans: {}
}

export class DbContainer extends Container<DbState> {

  state = {
    plans: {}
  }

  constructor(name) {
    super()

    this.localDB = new PouchDB(name)
    this.remoteDB = new PouchDB('http://localhost:5984/' + name)
    /**
     * If a remote DB is intialized, synchronize local CouchDB with a remote CouchDB
     */
    if (this.remoteDB) {
      this.syncToRemote()
    }

    this.getPlans().then(plans => this.setState({plans}))
  }

  /**
   * Synchronize local PouchDB with a remote CouchDB
   */
  syncToRemote() {
    this.localDB.sync(this.remoteDB, {
      live:true
    }).on('change', info => {
      // handle change
      console.log("change")
      //this.getPlans().then(plans => this.setState({plans}))
      //console.log(info.change.docs)
      this.getPlans().then(plans => this.setState({plans}))

      //this.setState(state => {
      //  x = info.change.docs.reduce((ps, d) => ({x: d}), state.plans)
      //  return state
      //})//.then(() => console.log(this.state))

    }).on('paused', function (err) {
      // replication paused (e.g. replication up to date, user went offline)
        console.log("paused")
        console.log(err)
    }).on('active', function () {
      // replicate resumed (e.g. new changes replicating, user went back online)
        console.log("active")
    }).on('denied', function (err) {
      // a document failed to replicate (e.g. due to permissions)
        console.log("denied")
        console.log(err)
    }).on('complete', function (info) {
      // handle complete
        console.log("complete")
        console.log(info)
    }).on('error', function (err) {
      // handle error
        console.log("error")
        console.log(JSON.stringify(err))
    });
  }

  async getPlans() {
    let plans = {};
    const allPlans = await this.localDB.allDocs({include_docs:true})
    allPlans.rows.forEach(n => plans[n.id] = n.doc);
    console.log("Plans from Database: "+ JSON.stringify(allPlans))
    return plans;
  }

  /**
   * Save a plan
   */
  async savePlan(plan) {
    /*plan.createAt = new Date();
    plan.updateAt = new Date();

    const response = await this.db.post({...plan})*/
    this.localDB.post(plan);
  }

  async deletePlan(plan){
    this.localDB.remove(plan);
  }
}
