/**
 * @author Harish.R <harish.r@314ecorp.com>
 * @description Content Area Component, contains route mapping
 */

import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import ErrorBoundary from '../ErrorBoundary';
// import axios from 'axios'
/**
 * ContentArea comonent
 */
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
	uploadToClodinary = async (uri: string, data: any) => {
		// const res = await axios.post(uri, data);
		console.log(data.get('file'));
    console.log(data.get('folder'));
		console.log('called ', uri);
	};

	uploadImage = (e: any): void => {
		if (e.target.files[0] && e.target.files.length) {
			const reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			const data = new FormData();
			// data.append('file', e.target.files[0]);
			data.append('folder', 'test_practice');
			const uri = '';
			this.uploadToClodinary(uri, data);
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
					<input type='file' accept='images/*' onChange={this.uploadImage} style={{margin:'10em 10em'}}/>
				</ErrorBoundary>
			</Layout.Content>
		);
	}
}

export default ContentArea;
