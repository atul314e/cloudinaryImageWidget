/**
 * @author Harish.R <harish.r@314ecorp.com>
 * @description Content Area Component, contains route mapping
 */

import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import ErrorBoundary from '../ErrorBoundary';
import axios from 'axios'
/**
 * ContentArea comonent
 */
interface Iresponse {
	data:{
	preset:string;
  	cloud_name:string;
}
}

class ContentArea extends PureComponent<App.IContentAreaProps> {
	/**
	 * Component did mount
	 */
	componentDidMount = (): void => {
		const initialLoader: HTMLElement | null = document.getElementById('splash-screen');
		if (initialLoader && initialLoader.parentNode) {
			initialLoader.parentNode.removeChild(initialLoader);
		}
	};

	uploadToCloudinary = async (uri: string, data: any) => {
		const res = await axios.post(uri, data);
		console.log(res);
	};

	uploadToApi = async (uri: string, data: any, File: any) => {
		const res: Iresponse = await axios.get(uri, {params:{
			username: data
		}});
		console.log(res);
		const form = new FormData();
		form.append('file', File);
		form.append('upload_preset', res.data.preset);
		form.append('cloud_name', res.data.cloud_name);
		form.append('folder', data);
		this.uploadToCloudinary(`https://api.cloudinary.com/v1_1/${res.data.cloud_name}/image/upload`, form);
	};

	uploadImage = (e: any): void => {
		if (e.target.files[0] && e.target.files.length) {
			const reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			const data = "string"
			//data.append('user', 'test_practice')
			// data.append('file', e.target.files[0]);
			const uri = 'http://localhost:8001/api/v1/preset/send';
			this.uploadToApi(uri, data , e.target.files[0]);
		}
	};
	/**
	 * ContentArea Renderer
	 *
	 * @returns {JSX.Element} render
	 */
	render(): JSX.Element {
		return (
			<Layout.Content>
				<ErrorBoundary>
					<input type='file' accept='images/*' onChange={this.uploadImage} style={{ margin: '10em 10em' }} />
				</ErrorBoundary>
			</Layout.Content>
		);
	}
}

export default ContentArea;
