import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export function MyDropzone() {
    const [file, setFiles] = useState < File > ('')
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files

        console.log(acceptedFiles);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (<>
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
        <div >

        </div>
    </>
    )
}