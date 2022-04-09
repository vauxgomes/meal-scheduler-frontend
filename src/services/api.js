/**
 * AXIOS
 * --------------------------------------
 * axios.request(config)
 * axios.get(url[, config])
 * axios.delete(url[, config])
 * axios.head(url[, config])
 * axios.options(url[, config])
 * axios.post(url[, data[, config]])
 * axios.put(url[, data[, config]])
 * axios.patch(url[, data[, config]])
 */

import axios from 'axios'

class API {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL
    })
  }

  /** MEALS */

  async getMeals(visible = null) {
    const response = await this.api.get(
      `/meals${visible !== null ? '?visible=' + visible : ''}`
    )
    return response.data
  }

  async postMeal(meal) {
    const response = await this.api.post('/meals', meal)
    return response.data
  }

  async putMeal(meal, id) {
    const response = await this.api.put(`/meals/${id}`, meal)
    return !!response
  }

  async deleteMeal(id) {
    const response = await this.api.delete(`/meals/${id}`)
    return !!response
  }

  /** SCHEDULES */

  async getSchedules(month, year) {
    const response = await this.api.get(`/schedules?m=${month}&y=${year}`)
    return response.data
  }

  async postSchedule(schedule) {
    const response = await this.api.post(`/schedules/`, schedule)
    return response.data
  }

  async putSchedule(schedule, id) {
    const response = await this.api.put(`/schedules/${id}`, schedule)
    return !!response
  }

  async deleteSchedule(id) {
    const response = await this.api.delete(`/schedules/${id}`)
    return response.data
  }
}

export default new API()