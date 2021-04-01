import { HttpClient } from "@angular/common/http";
import { DataService } from "./data.service";
import { LoggerService } from "./logger.service";

export function dataServiceFactory(logger: LoggerService, http: HttpClient) {
  let dataService = new DataService(logger, http);
  // do some custom stuff
  logger.log('Creating new data service with a factory service');
  return dataService;
}
