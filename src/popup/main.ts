import { createApp } from 'vue'
import App from './Popup.vue'
import { setupApp } from '~/logic/common-setup'
import '../styles'

import { createRecordDb } from '~/common/db'

createRecordDb()

const app = createApp(App)
setupApp(app)
app.mount('#app')
