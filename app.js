import resources from "./data/resources.js";
import * as resourceService from "./services/resourceService.js"
import {buildReport} from "./services/reportService.js"
const report = buildReport(resources, resourceService)


// const testModule = require("./services/testModule")
// const test = require("./services/testModule")

// console.log("learning report cli");

// console.log(typeof window)
// console.log(typeof document)
// console.log(typeof process)

// 1. dataset


// 2. functions

// 3.report


console.log(report);