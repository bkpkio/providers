import Provider from '@/provider'

import CryptoAvatars from '@/providers/CryptoAvatars'
import Meebits from '@/providers/Meebits'
import ReadyPlayerMe, { ReadyPlayerMeMetadata } from '@/providers/ReadyPlayerMe'

const providers = [CryptoAvatars, Meebits, ReadyPlayerMe]

export default providers.reduce<Record<string, Provider<unknown>>>(
  (acc, provider) => ({ ...acc, [provider.id]: provider }),
  {}
)

export interface ProviderMetadata {
  'ready-player-me': ReadyPlayerMeMetadata
}
