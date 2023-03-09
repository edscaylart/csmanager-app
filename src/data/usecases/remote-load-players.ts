import { supabase } from '@/db/client';
import { Player } from '@/domain/models';
import { LoadPlayers } from '@/domain/usecases';

export class RemoteLoadPlayers implements LoadPlayers {
  async list(): Promise<Player[]> {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const { data, error } = await supabase
      .from('players')
      .select()
      .eq('user_id', session?.user?.id)
      .order('updated_at', { ascending: false });

    if (error) throw new Error(error.message);

    return data.map(player => ({
      id: player.id,
      name: player.name,
      patent: player.patent,
      username: player.username,
      active: player.active,
    }));
  }
}
