var COS = require('cos-nodejs-sdk-v5');

module.exports = app => {
    app.addSingleton('tencentOss', createInstance);
};

function createInstance(config, app) {
    // 创建实例
    const cos = new COS({
        AppId: config.AppId,
        SecretId: config.SecretId,
        SecretKey: config.SecretId,
        FileParallelLimit: config.FileParallelLimit || 5, // 控制文件上传并发数
        ChunkParallelLimit: config.ChunkParallelLimit || 8, // 控制单个文件下分片上传并发数，在同园区上传可以设置较大的并发数
        ChunkSize: config.ChunkSize || 1024 * 1024, // 控制分片大小，单位 B，在同园区上传可以设置较大的分片大小
    });
    return cos;
};