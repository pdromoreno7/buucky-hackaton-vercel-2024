import Wrapper from '@/components/layouts/Wrapper'
import Steps from '@/components/steps/Steps'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Generate() {
  return (
    <Wrapper>
      <div className='flex grow flex-col justify-between pb-2 pt-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-center text-2xl font-extrabold leading-tight text-black'>
            ¿Qué libro quieres escribir hoy?
          </h1>
          <Steps />
        </div>
        <div className='mt-8 flex flex-col gap-4'>
          <Input placeholder='Un titulo corto para tu libro...' />

          <div className='flex justify-center'>
            <Button>Generar</Button>
          </div>

          {/* <div className='relative'>
            <textarea
              name='description'
              placeholder='Escribe algo que describa tu libro de manera corta y precisa...'
              rows={8}
              className='relative w-full rounded-md bg-white/5 px-3 py-2 text-sm outline-none transition focus:bg-white/10'
            />
            <ActionButton />
          </div> */}
        </div>
      </div>
      <span className='pb-2 text-center text-xs text-gray-400'>
        Al hacer uso de esta app, acepta nuestros Términos de servicio y
        Política de privacidad.
      </span>
    </Wrapper>
  )
}
