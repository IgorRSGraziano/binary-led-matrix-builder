import './App.css'
import Header from './components/header'
import Matrix from './components/matrix'
import { MatrixProvider } from './contexts/matrix-context'

function App() {
  return (
    <MatrixProvider rows={8} columns={8}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Header />
        <main className="pt-20">
          <Matrix />
        </main>
      </div>
    </MatrixProvider>
  )
}

export default App
