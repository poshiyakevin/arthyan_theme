'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

// MUI Imports
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import Alert from '@mui/material/Alert'

// Third-party Imports
import { signIn } from 'next-auth/react'
import { Controller, useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { object, minLength, string, email, pipe, nonEmpty } from 'valibot'
import type { SubmitHandler } from 'react-hook-form'
import type { InferInput } from 'valibot'

// Type Imports
import type { Mode } from '@core/types'
import type { Locale } from '@configs/i18n'

// Component Imports
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

type ErrorType = {
  message: string[]
}

type FormData = InferInput<typeof schema>

const schema = object({
  username: pipe(string(), nonEmpty('This field is required')),
  email: pipe(string(), minLength(1, 'This field is required'), email('Please enter a valid email address')),
  password: pipe(
    string(),
    nonEmpty('This field is required'),
    minLength(5, 'Password must be at least 5 characters long')
  )
})

const Register = ({ mode }: { mode: Mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [errorState, setErrorState] = useState<ErrorType | null>(null)

  // Vars
  const darkImg = '/images/pages/auth-v2-mask-2-dark.png'
  const lightImg = '/images/pages/auth-v2-mask-2-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-register-dark.png'
  const lightIllustration = '/images/illustrations/auth/v2-register-light.png'
  const borderedDarkIllustration = '/images/illustrations/auth/v2-register-dark-border.png'
  const borderedLightIllustration = '/images/illustrations/auth/v2-register-light-border.png'

  // Hooks
  const router = useRouter()
  const { lang: locale } = useParams()
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: valibotResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  )

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const response = await res.json()

      if (res.ok) {
        // Sign in automatically after successful registration
        const signInRes = await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false
        })

        if (signInRes && signInRes.ok && signInRes.error === null) {
          router.replace(getLocalizedUrl('/', locale as Locale))
        } else {
          setErrorState({ message: ['Failed to sign in automatically'] })
        }
      } else {
        setErrorState(response)
      }
    } catch (err: any) {
      setErrorState({ message: [err.message || 'Something went wrong'] })
    }
  }

  return (
    <div className='flex justify-center items-center min-bs-[100dvh] relative p-6 z-10 overflow-hidden rainbow-bg gap-10 xl:gap-24'>
      {/* 3D Floating Orbs */}
      <div className='absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary/30 blur-[100px] animate-pulse pointer-events-none'></div>
      <div className='absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/20 blur-[120px] animate-pulse pointer-events-none' style={{ animationDelay: '2s' }}></div>
      <div className='absolute top-[20%] right-[10%] w-[20vw] h-[20vw] rounded-full bg-warning/20 blur-[80px] animate-pulse pointer-events-none' style={{ animationDelay: '4s' }}></div>

      <img src={authBackground} className='absolute bottom-0 z-[-1] is-full opacity-40 mix-blend-overlay pointer-events-none' />

      <div className='flex flex-col justify-center items-center bg-backgroundPaper/80 p-8 md:p-14 md:is-[500px] border border-white/10 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-500 hover:shadow-[0_45px_75px_-15px_rgba(0,0,0,0.8)] hover:-translate-y-2 z-20 shrink-0'>
        <Link
          href={getLocalizedUrl('/', locale as Locale)}
          className='flex justify-center mbe-8 scale-110'
        >
          <Logo />
        </Link>

        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]'>
          <div className='text-center'>
            <Typography variant='h4' className='rainbow-text font-bold mb-2 text-3xl'>Adventure starts here 🚀</Typography>
            <Typography className='text-textSecondary text-lg mbs-1'>Make your app management easy and fun!</Typography>
          </div>

          {errorState && (
            <Alert severity='error' className='bg-[var(--mui-palette-error-lightOpacity)]'>
              {errorState.message.join(', ')}
            </Alert>
          )}

          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
            <Controller
              name='username'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  autoFocus
                  fullWidth
                  label='Username'
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  {...((errors.username || errorState !== null) && {
                    error: true,
                    helperText: errors?.username?.message
                  })}
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type='email'
                  label='Email'
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  {...((errors.email || errorState !== null) && {
                    error: true,
                    helperText: errors?.email?.message
                  })}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Password'
                  type={isPasswordShown ? 'text' : 'password'}
                  onChange={e => {
                    field.onChange(e.target.value)
                    errorState !== null && setErrorState(null)
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                            <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }
                  }}
                  {...(errors.password && { error: true, helperText: errors.password.message })}
                />
              )}
            />
            <div className='flex justify-between items-center gap-3'>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <>
                    <span>I agree to </span>
                    <Link className='text-primary' href='/' onClick={e => e.preventDefault()}>
                      privacy policy & terms
                    </Link>
                  </>
                }
              />
            </div>
            <Button fullWidth variant='contained' type='submit' className='rainbow-bg text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 py-3 text-lg font-bold rounded-xl'>
              Sign Up
            </Button>
            <div className='flex justify-center items-center flex-wrap gap-2'>
              <Typography>Already have an account?</Typography>
              <Typography component={Link} href='/login' color='primary.main'>
                Sign in instead
              </Typography>
            </div>
            <Divider className='gap-3 text-textPrimary'>or</Divider>
            <div className='flex justify-center items-center gap-2'>
              <IconButton size='small' className='text-facebook'>
                <i className='ri-facebook-fill' />
              </IconButton>
              <IconButton size='small' className='text-twitter'>
                <i className='ri-twitter-fill' />
              </IconButton>
              <IconButton size='small' className='text-textPrimary'>
                <i className='ri-github-fill' />
              </IconButton>
              <IconButton size='small' className='text-googlePlus'>
                <i className='ri-google-fill' />
              </IconButton>
            </div>
          </form>
        </div>
      </div>

      {/* Floating 3D Character Illustration (Flex Item) */}
      <div className='hidden lg:flex items-center justify-center max-w-[600px] xl:max-w-[750px] w-full z-20 drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
        <img
          src={characterIllustration}
          alt='character-illustration'
          className='w-full h-auto object-contain transition-all duration-500 hover:brightness-110 hover-zoom-in-out cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Register
