/**
 * @author Harish.R <harish.r@314ecorp.com>
 * @description Content Area Component, contains route mapping
 */

import React, { useState } from 'react';
import _ from 'lodash';
import axios from 'axios';
interface Iresponse {
	data: {
		preset: string;
		cloud_name: string;
	};
}

interface IApiData {
	pub_id: string;
	src_url: string;
	title: string;
	alt_text: string;
	height: number;
	width: number;
	creation_time:Date;
}

const ImageUpload = ()=>{
  const [filedataForApi, setFileDataForApi] = useState([null])

  const saveToApi = async (res: any) => {
		const uri = 'http://localhost:8001/api/v1/preset/update';
		const responseArray: IApiData[] = []; // array of object from cloudinary response

		_.forEach(res, (val) => {
			let public_id = val.data.public_id;
			let secure_url = val.data.secure_url;
			let image_title = val.data.original_filename;
			let image_alt_text = val.data.original_filename;
			let height = val.data.height;
			let width = val.data.width;
			let created_at = val.data.created_at;

			let data = {
				pub_id: public_id,
				src_url: secure_url,
				title: image_title,
				alt_text: image_alt_text,
				height: height,
				width: width,
				creation_time: created_at,
			};
			responseArray.push(data);
		});

		const response = await axios.post(uri, responseArray);
		console.log(response);
  };

  const uploadToCloudinary = (uri: string, data: any) => {
    return axios.post(uri, data).then((response)=>{
      console.log(response)
      setFileDataForApi([...filedataForApi, response.data.data]);
    });
  };

  const uploadToApi = async (uri: string, data: any, File: any) => {
    const res: Iresponse = await axios.get(uri, {
      params: {
        username: data,
      },
    });
    //console.log(res);

    // bulk uploading to cloudinary
    const allUpload =
       _.map(File, (val) => {
        let form = new FormData();
        form.append('file', val);
        form.append('upload_preset', res.data.preset);
        form.append('cloud_name', res.data.cloud_name);
        form.append('folder', data);
        return uploadToCloudinary(`https://api.cloudinary.com/v1_1/${res.data.cloud_name}/image/upload`, form);
      });

    // after action when all files uploaded to cloudinary
    axios.all(allUpload).then(() => {
        saveToApi(filedataForApi);
	  });
  };

  const uploadImage = (e: any): void => {
    if (e.target.files[0] && e.target.files.length) {
      const file_data:File[] = [];
      // adding all files to file_data array
      _.range(0, e.target.files.length).forEach((current, index, range)=>{
        console.log(current, range);
        let file = e.target.files[index];
        file_data.push(file);
      });

      const data = 'string';
      //data.append('user', 'test_practice')
      // data.append('file', e.target.files[0]);
      const uri = 'http://localhost:8001/api/v1/preset/send';
      uploadToApi(uri, data, file_data);
    }
  };
  return <input type='file' accept='images/*' onChange={uploadImage} style={{ margin: '10em 10em' }} />;
}

export default ImageUpload;
