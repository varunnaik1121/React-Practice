import React from 'react';
import { useState,useEffect } from 'react';
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/ImageGrid';

const App = () => {

  return <div>
        <UploadForm></UploadForm>
        <ImageGrid></ImageGrid>
  </div>;
};

export default App;
