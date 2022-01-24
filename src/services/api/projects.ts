import axios from 'axios';

import { environment } from '../../config/environments';

/**
 * projectService is a service that handles all the requests to the API regarding projects
 */
export const projectService = {
	getProjects: () => {
		return axios.get(`${environment.apiUrl}/projects`);
	},
}
