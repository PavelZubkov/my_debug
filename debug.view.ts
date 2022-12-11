namespace $.$$ {

	export class $my_debug extends $.$my_debug {


		skill_rows() {
			return Object.keys(this.dict()).map( key => this.Skill(key) )
		}

		skill_title(key: string) {
			return this.dict()[key]
		}

	}

}
					