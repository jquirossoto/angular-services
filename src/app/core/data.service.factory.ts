import { DataService } from "./data.service";
import { LoggerService } from "./logger.service";

export function dataServiceFactory(logger: LoggerService) {
  let dataService = new DataService();
  // do some custom stuff
  logger.log('Creating new data service with a factory service');
  return dataService;
}
