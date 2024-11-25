import { createFileRoute } from '@tanstack/react-router'
import { getPokeman } from '../../api/pokeman'

export const Route = createFileRoute('/pokemon/$id')({
  component: Pokeman,
  loader: async ({ params }) => await getPokeman(params.id),
})

function Pokeman() {
  const { id } = Route.useParams()
  const pokemon = Route.useLoaderData()
  console.log(pokemon)

  return (
    <div>
      <h2>Pokemon {id} </h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <dl>
        <dt>Height</dt>
        <dd>{pokemon.height}</dd>
        <dt>Weight</dt>
        <dd>{pokemon.weight}</dd>
      </dl>
    </div>
  )
}
