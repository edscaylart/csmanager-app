import { v4 as uuidv4 } from 'uuid';

import { supabase } from '@/db/client';
import { UpsertPlayers } from '@/domain/usecases';

export class RemoteUpsertPlayers implements UpsertPlayers {
  async set(body: UpsertPlayers.Body): Promise<UpsertPlayers.Model> {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!body.id) body.id = uuidv4();

    const { error } = await supabase.from('players').upsert({
      ...body,
      user_id: session?.user?.id,
    });

    if (error) throw new Error(error.message);

    return body as UpsertPlayers.Model;
  }
}
