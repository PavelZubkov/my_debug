namespace $ {

	export class $my_debug {

		@ $mol_mem
		db() {
			return new $node.pg.Pool({
				connectionString: process.env.DATABASE_URL,
				// ssl: { rejectUnauthorized: false },
				ssl: false,
			})
		}

	}

}
