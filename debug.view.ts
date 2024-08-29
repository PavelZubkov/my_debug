namespace $.$$ {

	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		date1( next? : $mol_time_moment ) {
			if (next) return next

			const date = new $mol_time_moment().merge({ day: 0, hour: 0, minute: 0, second: 0 })
			return date
		}

		@ $mol_mem
		date2( next? : $mol_time_moment ) {
			if (next) return next

			const date = new $mol_time_moment()
			return date
		}



	}

}
