/**
 * Local environment settings
 *
 */

module.exports = {

  logfile: '/mnt/koop/koop.log',

  peechee: {
    type: 'local',
    dir: '/mnt/koop/data',
  },

  data_dir: '/mnt/koop/data',
  
  github_token: '6c67e3477b6c08a2871d76b26db2b66a7b78f8a6',

  // use cached images
  image_cache: true,

  db: {
    postgis: {
      conn: "postgres://koopdb:k00procks!1@koop-production.cmczlep1afim.us-east-1.rds.amazonaws.com:5432/koop",
    }
  },

  port: 80,

  environment: process.env.NODE_ENV || 'development'

};
