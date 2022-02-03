import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const ImageUploader = ({ formik }) => {
  const [loading, setloading] = useState(false);

  const handleChange = (info) => {
    formik.setFieldValue(
      "profile",
      `https://i.pravatar.cc/150?u=${Math.floor(Math.random() * 1000)}`
    );
    // if (info.file.status === "uploading") {
    //   return;
    // }
    // if (info.file.status === "done") {
    //   getBase64(info.file.originFileObj, (imageUrl) => {
    //     setloading(false);
    //     formik.setFieldValue("profile", imageUrl);
    //   });
    // }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload your profile</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {formik.getFieldProps("profile").value ? (
        <img
          src={formik.getFieldProps("profile").value}
          alt="avatar"
          style={{ width: "100%" }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default ImageUploader;
