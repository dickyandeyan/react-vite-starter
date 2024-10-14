import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import useTitle from '@/hooks/useTitle'

export default function Login() {
  useTitle('Login')
  return (
    <div className="text-center flex gap-3 flex-col">
      <p>Login</p>
      <Link to={'/'}>
        <Button>Go to Dashboard</Button>
      </Link>
    </div>
  )
}
