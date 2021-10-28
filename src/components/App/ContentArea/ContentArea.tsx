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
	preset:string;
  cloud_name:string;
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

	uploadToApi = async (uri: string, data: any) => {
		const res: Iresponse = await axios.post(uri, data);
		console.log(data.get('file'));
		console.log(data.get('folder'));
		console.log('called ', uri);
		const form = new FormData();
		form.append('file', data.get('file'));
		form.append('upload_preset', res.preset);
		form.append('cloud_name', res.cloud_name);
		form.append('folder', data.get('folder'));
		this.uploadToCloudinary(`https://api.cloudinary.com/v1_1/${res.cloud_name}/image/upload`, form);
	};

	uploadImage = (e: any): void => {
		if (e.target.files[0] && e.target.files.length) {
			const reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			const data = new FormData();
			// data.append('file', e.target.files[0]);
			data.append('folder', 'p1/test_practice');
			const uri = '';
			this.uploadToApi(uri, data);
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
