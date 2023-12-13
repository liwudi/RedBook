function commonFilter(res: any) {
  return res;
}
function get(url: string) {
  return fetch(url).then(res => {
    return commonFilter(res);
  });
}
function post() {}
function upload() {}

const RequestService = {
  get,
  post,
  upload,
};

export default RequestService;
