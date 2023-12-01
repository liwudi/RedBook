interface ConfigInterface {
    server_type: 'TEST' | 'PROD' | 'LOCAL';
    mainColor: string;
}
const Config: ConfigInterface = {
    mainColor: '#4f77db',
    server_type: 'TEST',
};

const Server = {
    TEST: 'http://wdservice.mapbar.com',
    PROD: 'http://wdservice.mapbar.com',
    LOCAL: 'http://127.0.0.1',
};

export default {
    ...Config,
    server: Server[Config.server_type],
};
