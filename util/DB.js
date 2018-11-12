import PouchDB from 'pouchdb-react-native'

export class DB
{
	constructor(name){
		this.localDB = new PouchDB(name)
    this.remoteDB = new PouchDB('http://localhost:5984/' + name)
		/**
	   * If a remote DB is intialized, synchronize local CouchDB with a remote CouchDB
	   */
		if (this.remoteDB) {
	    this.syncToRemote()
		}
	}

	/**
   * Synchronize local PouchDB with a remote CouchDB
   */
	syncToRemote=()=>{
		this.localDB.sync(this.remoteDB, {
			live:true
		}).on('change', function (info) {
			// handle change
				console.log("change")
				console.log(info)
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
				console.log(err)
		});
	}
	/**
	 * From the local DB, load all the plans
	 */
		async getPlans()
	  {
			let plans = {};
			const allPlans = await this.remoteDB.allDocs({include_docs:true})
	    allPlans.rows.forEach(n => plans[n.id] = n.doc);
	    console.log("Plans from Database: "+JSON.stringify(allPlans))
	    return plans;
	  }

	/**
   * Save a plan
   */
	savePlan(){
		/*plan.createAt = new Date();
    plan.updateAt = new Date();

    const response = await this.db.post({...plan})*/
    localDB.post({
      name: 'David',
      age: 69
    });
		return getPlan();

	}

	async removePlan(plan){
		localDB.get(plan).then(function (doc) {
	  return localDB.remove(doc);
	});

    //localDB.remove(plan)
	}
	/**
	 * Refresh the items in a shopping list
	 * @param {string} listid id of a shopping list
	 */
	/**
   * Change the name of an item
   * @param {string} itemid id of an item
   * @param {string} newname new name of the item
   */

	/**
	 * Delete an item
	 * @param {string} itemid id of an item
	 */
}
