import { Either, Left, Right } from "purify-ts"
import { Instance }            from "../../@types/Instance"

const fetchInstances = async (): Promise<Either<Error, Instance[]>> => {
  try {
    const response  = await fetch( "https://piped-instances.kavin.rocks",
                                   {
                                     mode: "cors",
                                   } )
    const instances = await response.json() as Instance[]
    return Right( instances.filter( instance =>
                                      instance.up_to_date ) )
  } catch ( error ) {
    console.error( error )
    return Left( error as Error )
  }
}

export default fetchInstances
