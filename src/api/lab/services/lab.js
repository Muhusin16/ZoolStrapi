'use strict';

/**
 * lab service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lab.lab');
