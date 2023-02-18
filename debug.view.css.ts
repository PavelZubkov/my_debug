namespace $.$$ {

	const { per, rem } = $mol_style_unit

	$mol_style_define($my_debug, {

		Pomodoro_page: {
			flex: {
				basis: rem(20),
			},
		},

		Progress: {
			width: per(100),
		},

	})

	$mol_style_define($my_debug_progress, {

		Title: {
			padding: $mol_gap.text,
		},

	})

}
