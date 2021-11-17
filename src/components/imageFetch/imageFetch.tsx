/**
 * @author Atul Silori <atul.silori@314ecorp.com>
 * @description
 */

import React, { useState } from 'react';
import _ from 'lodash';
import axios from 'axios';

interface IImageData {
	id: string;
	public_id: string;
	src: string;
	title: string;
	alt: string;
	height: number;
	width: number;
	created_time: Date;
}

const getData = async (uri: string): Promise<any> => {
	const response = await axios.get(uri);
	return response.data;
};

const Images: React.FC = () => {
	const uri = 'http://localhost:8001/api/v1/imagedata/';
	const [imagesdata, setimagesdata] = useState({});
	setimagesdata(getData(uri));
	return (
		<>
			<div className='imageContainer'>
				{_.map(imagesdata, (imageData: IImageData) => {
					return <img className='image' src={imageData.src} />;
				})}
			</div>
		</>
	);
};

export default Images;
