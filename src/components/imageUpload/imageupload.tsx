/**
 * @author Harish.R <harish.r@314ecorp.com>
 * @description Content Area Component, contains route mapping
 */

import React, { useState } from 'react';
import axios from 'axios';
interface Iresponse {
	data: {
		preset: string;
		cloud_name: string;
	};
}

const ImageUpload = ()=>{
  const [dimention, setDimention] = useState({width: 0, height:0});

  const saveToApi = async (res: any) => {
    const uri = 'http://localhost:8001/api/v1/preset/send';

    const public_id = res.data.public_id;
    const secure_url = res.data.secure_url;
    const image_title = res.data.original_filename;
    const image_alt_text = res.data.original_filename;
    const height = dimention.height;
    const width = dimention.width;
    const created_at = res.data.created_at;

    const data = {
      uri: uri,
      public_id: public_id,
      secure_url: secure_url,
      image_title: image_title,
      image_alt_text: image_alt_text,
      height: height,
      width: width,
      created_at: created_at,
	  };

    const response = await axios.post(uri, data);
    console.log(response);
  };

  const uploadToCloudinary = async (uri: string, data: any) => {
    const res = await axios.post(uri, data);
    console.log(res);
    saveToApi(res);
  };

  const uploadToApi = async (uri: string, data: any, File: any) => {
    const res: Iresponse = await axios.get(uri, {
      params: {
        username: data,
      },
    });
    //console.log(res);
    const form = new FormData();
    form.append('file', File);
    form.append('upload_preset', res.data.preset);
    form.append('cloud_name', res.data.cloud_name);
    form.append('folder', data);
    uploadToCloudinary(`https://api.cloudinary.com/v1_1/${res.data.cloud_name}/image/upload`, form);
  };

  const uploadImage = (e: any): void => {
    if (e.target.files[0] && e.target.files.length) {
      const reader = new FileReader();
      reader.onload = function () {
        var image = new Image();

        image.src = e.target.result;

        image.onload = function () {
          //alert(image.width);
          setDimention({width: image.width, height: image.height});
        };
      };
      reader.readAsDataURL(e.target.files[0]);
      const data = 'string';
      //data.append('user', 'test_practice')
      // data.append('file', e.target.files[0]);
      const uri = 'http://localhost:8001/api/v1/preset/send';
      uploadToApi(uri, data, e.target.files[0]);
    }
  };
  return <input type='file' accept='images/*' onChange={uploadImage} style={{ margin: '10em 10em' }} />;
}

export default ImageUpload;
