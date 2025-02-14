import * as DescriptionPage from '../../components/DescriptionPage'
import { z } from 'zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useId, useState } from 'react'
import { Icon } from '@iconify/react'

import { HeaderSection } from '../../components/HeaderSection'
import { Map } from '../../components/Map'
import { Select } from '../../components/Form/Select'
import { SelectItem } from '../../components/Form/Select/SelectItem'
import { ScrollReveal } from '../../components/ScrollReveal'
import { Input } from '../../components/Form/Input'

import styles from './styles.module.css'
import { ErrorMessage } from '../../components/Form/ErrorMessage'

const queryCollectFormSchema = z.object({
  address: z.string().nonempty('Digite um endereço'),
  category: z.string().optional(),
})

const pontosColeta = [
  {
    id: 1,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 2,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 3,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 4,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 5,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 6,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 7,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 8,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 9,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
]

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Pontos de Coleta',
  },
]

const categories = ['Óleo', 'Tecnologia', 'Resíduos']

export function PontosDeColeta() {
  const [pontosColeta, setPontosColeta] = useState('')

  return (
    <main className={styles.main_content}>
      <HeaderSection
        title="Pontos De Coleta"
        className={styles.header}
        linksMenu={linksMenu}
      />

      <DescriptionPage.Root className={`container gap-y-10 lg:gap-y-16 !px-0`}>
        <DescriptionPage.Content className="px-6 xl:px-0 text-center lg:text-left">
          <ScrollReveal origin="bottom">
            <DescriptionPage.Subtitle subtitle="Nossos Pontos" />
            <DescriptionPage.Title
              className="mt-2 mb-6 md:max-w-lg md:mx-auto lg:mx-0"
              title="Descubra o Ponto de Coleta Mais Próximo de Você!"
            />
            <DescriptionPage.Paragraph className="md:max-w-lg md:mx-auto lg:max-w-none">
              Digite o seu endereço e escolha a categoria no campo ao lado para
              encontrar o Ponto de Coleta mais próximo de você.
            </DescriptionPage.Paragraph>
          </ScrollReveal>
        </DescriptionPage.Content>

        <QueryCollectForm setPontosColeta={setPontosColeta} />

        <div className="col-span-full">
          <div className={styles.map_wrapper}>
            <Map />
          </div>

          {pontosColeta && (
            <article className={`${styles.pontos_coleta_wrapper} px-6 xl:px-0`}>
              <h3 className={styles.title_pontos_coleta}>
                Pontos de Coleta Mais Próximos:
              </h3>
              <div className={styles.data_pontos_coleta}>
                {pontosColeta.map((ponto) => (
                  <div key={ponto.id} className={styles.ponto_coleta}>
                    <h4 className={styles.title_ponto_coleta}>{ponto.title}</h4>
                    <p className={styles.address}>
                      {ponto.address}. {ponto.complement && ponto.complement}
                      CEP: {ponto.cep}. {ponto.state}.
                    </p>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      </DescriptionPage.Root>
    </main>
  )
}

function QueryCollectForm({ setPontosColeta }) {
  const fieldsId = useId()

  const queryCollect = useForm({
    resolver: zodResolver(queryCollectFormSchema),
    defaultValues: {
      address: '',
      category: '',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = queryCollect

  function queryPontosColeta(data) {
    setPontosColeta(pontosColeta)
    window.scrollBy(0, document.body.offsetHeight)
  }

  return (
    <ScrollReveal origin="top" className={`h-auto w-auto flex-1 mx-6 xl:mx-0`}>
      <form
        onSubmit={handleSubmit(queryPontosColeta)}
        className={`bg-white rounded grid gap-5 sm:gap-6 sm:px-6 lg:p-11 lg:shadow-[0px_12px_56px_0px_#10295421]`}
        method="post"
      >
        <FormProvider {...queryCollect}>
          <Input.Root>
            <Input.Field
              name="address"
              placeholder="Digite um endereço"
              aria-label="Digite um endereço"
              aria-describedby={`${fieldsId}-address`}
            />
            {errors.address && (
              <ErrorMessage id={`${fieldsId}-address`} className="!static">
                {errors.address.message}
              </ErrorMessage>
            )}
          </Input.Root>

          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <Select placeholder="Selecione uma categoria" {...field}>
                  {categories.map((category) => {
                    return (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    )
                  })}
                </Select>
              )
            }}
          />

          <div className={styles.location_input}>
            <Icon icon="icon-park-solid:local-two" aria-hidden={true} />
            <span className={styles.title_location_input}>
              Minha Localização Atual
            </span>
          </div>
        </FormProvider>

        <button type="submit" className={`btn ${styles.btn_collects}`}>
          Ver Todos os Pontos de Coleta
        </button>
      </form>
    </ScrollReveal>
  )
}
