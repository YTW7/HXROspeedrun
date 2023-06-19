const websiteRegex = /^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/;

export default function validateWebsiteLink(link) {
  return websiteRegex.test(link);
}