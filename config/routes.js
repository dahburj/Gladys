/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/


  // views
  '/login' : 'WelcomeController.login',
  '/': 'WelcomeController.index',
  '/installation': 'WelcomeController.installation',
  
  //dashboard
  '/dashboard': 'DashboardController.index' ,
  
  //Action
  'post /action': 'ActionController.create',
  'delete /action/:id': 'ActionController.delete',
  'patch /action/:id': 'ActionController.update',
  'post /action/:id/param': 'ActionController.addParam',
  
  
  //ActionParam
  'patch /actionparam/:id': 'ActionParamController.update',
  
  //actionType
  'get /actiontype': 'ActionType.index',
  'get /actiontype/:id/params': 'ActionType.getParams',
  
  // Alarm
  'get /alarm': 'AlarmController.index',
  'post /alarm': 'AlarmController.create',
  'post /alarm/timer': 'AlarmController.timer',
  'delete /alarm/:id': 'AlarmController.delete',
  
  // Area
  'get /area': 'AreaController.index',
  'post /area': 'AreaController.create',
  'patch /area/:id': 'AreaController.update',
  'delete /area/:id': 'AreaController.delete',
  
  // Box
  'get /box': 'BoxController.index',
  'post /box': 'BoxController.create',
  'delete /box/:id': 'BoxController.delete',
  
  //BoxType
  'get /boxtype' : 'BoxTypeController.index',
  
  // Brain
  'get /brain/classify': 'BrainController.classify', 
  'post /brain/trainnew': 'BrainController.trainNew', 
  
  
  //Category
  'get /category': 'CategoryController.index',
  'get /category/:service/eventtype': 'CategoryController.getEventTypes',
  
  // Device 
  'get /device': 'DeviceController.index',
  'post /device': 'DeviceController.create',
  'patch /device/:id': 'DeviceController.update',
  'delete /device/:id': 'DeviceController.delete',
  'get /device/:id/devicetype': 'DeviceController.getDeviceTypes',
  
  
  // DeviceState
  'get /devicestate': 'DeviceStateController.index',
  
  // DeviceType
  'get /devicetype': 'DeviceTypeController.index',
  'get /devicetype/room': 'DeviceTypeController.getByRoom',
  'patch /devicetype/:id': 'DeviceTypeController.update',
  'post /devicetype/:id/exec': 'DeviceTypeController.exec',
  
  // Event
  'get /event': 'EventController.index',
  'post /event': 'EventController.create',
  'get /event/create': 'EventController.create', // allowing get request too for creating event (useful for connected object)
  
  //EventType
  'get /eventtype/:id/launcherparam': 'EventTypeController.getLauncherParams',
  
  // House
  'get /house': 'HouseController.index',
  'post /house': 'HouseController.create',
  'patch /house/:id': 'HouseController.update',
  'delete /house/:id': 'HouseController.delete',
  'get /house/:id/user': 'HouseController.getUsers',
  
  // Launcher
  'get /launcher': 'LauncherController.index',
  'post /launcher': 'LauncherController.create',
  'patch /launcher/:id': 'LauncherController.update',
  'delete /launcher/:id': 'LauncherController.delete',
  'get /launcher/:id/action': 'LauncherController.getActions',
  'get /launcher/:id/state': 'LauncherController.getStates',

  // Location
  'post /location': 'LocationController.create',
  'get /location/create': 'LocationController.create',
  
  // Mode
  'get /mode': 'ModeController.index',
  'post /mode': 'ModeController.create',
  'delete /mode/:id': 'ModeController.delete',
  'post /house/:id/mode': 'ModeController.change', 
  
  // Module
  'get /module': 'ModuleController.index',
  'post /module/install': 'ModuleController.install',
  'post /module/:slug/config': 'ModuleController.config',
  
  // Notification
  'get /notification': 'NotificationController.index',
  
  // NotificationType
  'get /notificationtype': 'NotificationTypeController.index',
  
  // NotificationUser
  'get /notificationuser': 'NotificationUserController.index',
  'post /notificationuser': 'NotificationUserController.create',
  'patch /notificationuser/:id': 'NotificationUserController.update',
  'delete /notificationuser/:id': 'NotificationUserController.delete',
  
  // Param
  'get /param': 'ParamController.index',
  'post /param': 'ParamController.create',
  'patch /param/:name': 'ParamController.update',
  'delete /param/:name': 'ParamController.delete',
  
  // ParamUser
  'get /paramuser': 'ParamUserController.index',
  'post /paramuser': 'ParamUserController.create',
  'patch /paramuser/:name': 'ParamUserController.update',
  'delete /paramuser/:name': 'ParamUserController.delete',
  
  // Script
  'get /script': 'ScriptController.index',
  'post /script': 'ScriptController.create',
  'patch /script/:id': 'ScriptController.update',
  'post /script/:id/exec': 'ScriptController.exec',
  'delete /script/:id': 'ScriptController.delete',
  
  // Room
  'get /room': 'RoomController.index',
  'post /room': 'RoomController.create',
  'patch /room/:id': 'RoomController.update',
  'delete /room/:id': 'RoomController.delete',
  
  //Socket
  'post /socket/subscribe': 'SocketController.subscribe',
  
  // State
  'post /state': 'StateController.create',
  'patch /state/:id': 'StateController.update',
  'delete /state/:id': 'StateController.delete',
  
  // StateType
  'get /statetype': 'StateTypeController.index',
  'get /statetype/:id/stateparam': 'StateTypeController.getStateParams',
  
  
  // System
  'get /system': 'SystemController.index',
  
  
  // Token
  'get /token': 'TokenController.index',
  'post /token': 'TokenController.create',
  'patch /token/:id': 'TokenController.update',
  'delete /token/:id': 'TokenController.delete',
  
  
  // Update
  'get /update/verify': 'UpdateController.verify',
  'get /update/event': 'UpdateController.updateEvents',
  'get /update/mode': 'UpdateController.updateModes',
  'get /update/sentence': 'UpdateController.updateSentences',
  'get /update/box': 'UpdateController.updateBoxTypes',
  'get /update/category': 'UpdateController.updateCategories',
  
  //User
  'get /user': 'UserController.index',
  'post /user': 'UserController.create',
  'post /user/login': 'UserController.login',
  'patch /user/:id': 'UserController.update',
  'delete /user/:id': 'UserController.delete',
  'get /user/whoami': 'UserController.whoami',
  



  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
