import { InjectionToken } from "@angular/core";
import { environment } from '../environments/environment';
export interface IAppConfig {
    API_ENDPOINT: string;
}

export const AppConfig: IAppConfig = {    
    API_ENDPOINT: environment.endpoint,
    
};

export let APP_CONFIG = new InjectionToken< IAppConfig >( 'app.config' );
