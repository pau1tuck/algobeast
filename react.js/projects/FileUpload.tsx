import React, { useState } from "react";
import ReactDOM from "react-dom";

/*** FILE_UPLOAD.tsx ***/
function FileUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>("");

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setFile(files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await fetch(
                    "http://localhost:3000/upload",
                    {
                        method: "POST",
                        body: formData,
                    },
                );

                const data = await response.json();
                if (data.error) {
                    setUploadStatus("Error uploading file.");
                } else {
                    setUploadStatus("File uploaded successfully!");
                }
            } catch (error) {
                setUploadStatus("Error uploading file.");
            }
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <p>{uploadStatus}</p>
        </div>
    );
}

export default FileUpload;

/*** APP.tsx ***/
function App() {
    return (
        <div>
            <h1>File Upload App</h1>
            <FileUpload />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
