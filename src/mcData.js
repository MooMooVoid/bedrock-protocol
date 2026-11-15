const minecraftData = require('minecraft-data')

const BEDROCK_DATA_VERSION_ALIASES = {
  '1.26.63': '1.26.60'
}

/**
 * Gets Bedrock edition data, falling back to compatible packet definitions
 * for versions that share an existing protocol schema.
 *
 * @param {string} version Minecraft Bedrock version.
 * @returns {object} Minecraft data for the requested version.
 */
function getBedrockData (version) {
  const dataVersion = BEDROCK_DATA_VERSION_ALIASES[version] || version
  return minecraftData('bedrock_' + dataVersion)
}

module.exports = {
  getBedrockData,
  versions: minecraftData.versions
}
