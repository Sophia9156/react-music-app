class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }
  async todayMusic() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=music%20playlist&regionCode=KR&type=video&key=${this.key}`, 
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }
}

export default Youtube;