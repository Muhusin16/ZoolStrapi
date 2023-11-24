'use strict';

/**
 * mobile-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mobile-app.mobile-app');
