const fs = require('fs');
const path = require('path');

hexo.extend.filter.register('before_post_render', function (data) {
  const pluginConfig = hexo.config.hexo_auto_time || {};

  // 检查插件是否启用，未启用则跳过
  if (!pluginConfig.enable) {
    return data;
  }

  // 获取配置策略，默认使用 'ctime' (创建时间)
  const strategy = pluginConfig.strategy || 'ctime';
  
  // 如果 post 中没有设置 date，则使用文件系统的时间
  if (!data.date) {
    const filePath = path.join(hexo.source_dir, '_posts', data.source);
    const stats = fs.statSync(filePath);

    // 根据用户配置策略，选择时间
    if (strategy === 'ctime') {
      data.date = stats.birthtime; // 文件的创建时间
    } else if (strategy === 'mtime') {
      data.date = stats.mtime; // 文件的最后修改时间
    }
  }

  return data;
});
