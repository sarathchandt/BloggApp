import  { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar:[
        [{header:[1,2,3,4,5,6,false]}],
        [{font:[]}],
        [{size:[]}],
        ["bold","italic","underline","strike","blockquote"],
        [
            {list:"ordered"},
            {list:"bullet"},
            {indent:"-1"},
            {indent:"+1"}
        ],
        ["link","image","video"]
    ]
}
function TextEditor() {

    const [value, setValue] = useState('');
    useEffect(()=>{console.log(value)},[value])
    
  return (  
    <>
   <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
   <div dangerouslySetInnerHTML={{__html:value}}></div>
   </>
  )
}

export default TextEditor