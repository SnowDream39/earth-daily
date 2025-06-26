import axios from 'axios';
import Board from '../board';

interface SearchOptions {
  index?: number;
  count?: number;
  threshold?: number;
  sort?: string;
  order?: "oldset" | "newest";
}

// 创建一个 axios 实例，可以配置基础URL、请求头等
export const api = axios.create({
  baseURL: 'https://api.vocabili.top', // 替换成你需要的API地址
  timeout: 20000, // 设置超时时间
});

// 请求拦截器：可以在这里加上认证信息等
api.interceptors.request.use(
  (config) => {
    // 例如：在请求头中加上token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器：在这里处理响应的数据格式
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

class Requester {
  static endpoint = {
    get_song_info: "/info/song",
    get_board: "/info/board",
    get_board_metadata: "/metadata/board",
    get_current_board: "/info/board/_latest",
    get_song_rank_history: "/history/song/rank",
    get_video_stat_history: "/history/platform/count",
    list_song_pool: "/list/song/by_pool",
    list_song: (type: string) => `/list/song/by_${type}`,
    list: (type: string) => `/list/${type}`,
    search_song_platform: "/search/song/by_title",
    search_song_name: "/search/song/by_name",
    search_song_filter: "/search/song/by/filter",
    check_board: "/check/exist/board",
    check_issue: "/check/exist/board/issue",
  }

  constructor() {}

  async get_song_info(target: string) {
    const response = await api.get(Requester.endpoint.get_song_info, {
      params: { target: target }
    })
    return response.data.data
  }

  /**
   * 如果不填写issue，默认最新期
   */
  async get_board(board = new Board("vocaloid-daily-main"), count = 20, index = 1 ) {
    if (board.issue !== -1) {
      const response = await api.get(Requester.endpoint.get_board, {
        params: { board: board.id, part: board.part, issue: board.issue, count, index }
      })
      return response.data.data
    } else {
      const response = await api.get(Requester.endpoint.get_current_board, {
        params: { board: board.id, part: board.part, count, index }
      })
      return response.data.data
    }
  }

  async get_board_metadata(board = new Board("vocaloid-daily")) {
    const response = await api.get(Requester.endpoint.get_board_metadata, {
      params: { target: board.id }
    })
    return response.data.data
  }


  async get_song_list(type: string, target: string, index = 1, count = -1){
    const response = await api.get(Requester.endpoint.list_song(type), {
      params: {target, count, index}
    })
    return response.data.data
  }

  async get_song_rank_history(target: string, board: string, count: number, index: number) {
    const response = await api.get(Requester.endpoint.get_song_rank_history, {
      params: {target, board, count, index}
    })
    return response.data.data
  }

  async get_video_stat_history(target: string, count = 300, index = 1, order = 'newest') {
    const response = await api.get(Requester.endpoint.get_video_stat_history, {
      params: {target, count, index, order}
    })
    return response.data.data
  }

  async fetch_data(endpoint: string, params: Record<string, any>) {
    const response = await api.get(endpoint, { params });
    return response.data.data;
  }

  async list_song_pool(target: string, index = 1, count = 20) {
    const response = await api.get(Requester.endpoint.list_song_pool, {
      params: { target, index, count }
    })
    return response.data.data
  }


  // 以下是search
  async search(endpoint: string, params: Record<string, any>, options: SearchOptions = {}) {
    const {index = 1, count = 10, threshold = 0.2, sort = 'default'} = options;
    return this.fetch_data(endpoint, { ...params, index, count, threshold, sort})
  }

  async search_song_by_platform(target: string, options: SearchOptions = {}){
    return this.search(Requester.endpoint.search_song_platform, {target}, options)
  }


  async search_song_by_name(target: string, options:SearchOptions = {}){
    return this.search(Requester.endpoint.search_song_name, {target}, options)
  }

  async search_artist(type: string, target: string, options: SearchOptions = {}){
    return this.search(`/search/${type}/by_name`, {target}, options)
  }

  async search_vocalist(target: string, options: SearchOptions = {}){
    return this.search_artist('Vocalist', target, options)
  }

  async search_uploader(target: string, options: SearchOptions = {}){
    return this.search_artist('Uploader', target, options)
  }

  async search_producer(target: string, options: SearchOptions = {}){
    return this.search_artist('Producer', target, options)
  }

  async search_synthesizer(target: string, options: SearchOptions = {}){
    return this.search_artist('Synthesizer', target, options)
  }

  async search_song_by_filter(params: any, options: SearchOptions) {
    const response = await api.post(Requester.endpoint.search_song_filter,{
      params: {...params, ...options}
    })
    return response.data.data
  }

  // 以下是check
  async check_board(board = "vocaloid-daily") {
    const response = await api.get(Requester.endpoint.check_issue, {
      params: { board }
    })
    return response.data.data
  }
  async check_issue(board = "vocaloid-daily", issue?: number | string) {
    const response = await api.get(Requester.endpoint.check_issue, {
      params: { board, issue }
    })
    return response.data.data
  }


}

export const requester = new Requester()
