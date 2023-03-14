import { FFmpegSettings } from "./types"

export const ffmpegSettings: FFmpegSettings = {
	videoCodec: {
		csrf: {
			min: 0,
			max: 50,
			defaultOption: 1,
			step: 1,
		},
		outputFormats: [
			{
				name: "MP4",
				value: "mp4",
			},
			{
				name: "MKV",
				value: "mkv",
			},
			{
				name: "Webm",
				value: "webm",
			},
		],
		codecs: [
			{
				name: "Copy Original Codec",
				value: "copy",
			},
			{
				name: "AV1",
				value: "libaom-av1",
			},
			{
				name: "H.264",
				value: "libx264",
			},
			{
				name: "H.265",
				value: "libx265",
			},
			{
				name: "MPEG-2",
				value: "mpeg2",
			},
			{
				name: "Theora",
				value: "libtheora",
			},
		],
		presets: [
			{
				name: "UltraFast",
				value: "ultrafast",
			},
			{
				name: "Super Fast",
				value: "superfast",
			},
			{
				name: "Very Fast",
				value: "veryfast",
			},
			{
				name: "Faster",
				value: "faster",
			},
			{
				name: "Fast",
				value: "fast",
			},
			{
				name: "Medium",
				value: "medium",
			},
			{
				name: "Slow",
				value: "slow",
			},
			{
				name: "Slower",
				value: "slower",
			},
			{
				name: "Very Slow",
				value: "veryslow",
			},
			{
				name: "Placebo",
				value: "placebo",
			},
		],
		tune: [
			{
				name: "Film",
				value: "film",
			},
			{
				name: "Animation",
				value: "animation",
			},
			{
				name: "Grain",
				value: "grain",
			},
			{
				name: "Still Image",
				value: "stillimage",
			},
			{
				name: "Fast Decode",
				value: "fastdecode",
			},
			{
				name: "Zero Latency",
				value: "zerolatency",
			},
			{
				name: "pjsmr",
				value: "pjsmr",
			},
		],
		profiles: [
			{
				name: "Baseline",
				value: "baseline",
			},
			{
				name: "Main",
				value: "main",
			},
			{
				name: "High",
				value: "high",
			},
			{
				name: "High10",
				value: "high10",
			},
			{
				name: "High422",
				value: "high422",
			},
			{
				name: "High444",
				value: "high444",
			},
		],
	},
	subtitles: {},
	videoFilters: {
		framerate: [
			{
				name: "5",
				value: "5",
			},
			{ name: "10", value: "10" },
			{ name: "12", value: "12" },
			{ name: "15", value: "15" },
			{ name: "20", value: "20" },
			{ name: "24", value: "24" },
			{ name: "30", value: "30" },
			{ name: "48", value: "48" },
			{ name: "50", value: "50" },
			{ name: "50", value: "50" },
			{ name: "60", value: "60" },
			{ name: "72", value: "72" },
			{ name: "75", value: "75" },
			{ name: "90", value: "90" },
			{ name: "100", value: "100" },
			{ name: "120", value: "120" },
		],
		saturation: {
			min: 0,
			max: 3,
			step: 0.1,
			defaultOption: 1,
		},
		contrast: {
			min: -1000,
			max: 1000,
			step: 20,
			defaultOption: 1,
		},
		brightness: {
			min: -1,
			max: 1,
			step: 0.1,
			defaultOption: 0,
		},
		gamma: {
			min: 0.1,
			max: 10,
			step: 0.1,
			defaultOption: 1,
		},
		gammaR: {
			min: 0.1,
			max: 10,
			step: 0.1,
			defaultOption: 1,
		},
		gammaG: {
			min: 0.1,
			max: 10,
			step: 0.1,
			defaultOption: 1,
		},
		gammaB: {
			min: 0.1,
			max: 10,
			step: 0.1,
			defaultOption: 1,
		},
		gammaWeight: {
			min: 0.1,
			max: 10,
			step: 0.1,
			defaultOption: 1,
		},
	},
	audioCodec: {
		codecs: [
			{ name: "Copy Original Codec", value: "copy" },
			{ name: "AAC", value: "aac" },
			{ name: "AAC3", value: "aac3" },
			{ name: "FLAC", value: "flac" },
			{ name: "Opus", value: "opus" },
		],
		bitrate: [
			{ name: "24", value: "24" },
			{ name: "32", value: "32" },
			{ name: "40", value: "40" },
			{ name: "48", value: "48" },
			{ name: "56", value: "56" },
			{ name: "64", value: "64" },
			{ name: "80", value: "80" },
			{ name: "96", value: "96" },
			{ name: "112", value: "112" },
			{ name: "128", value: "128" },
			{ name: "160", value: "160" },
			{ name: "192", value: "192" },
			{ name: "224", value: "224" },
			{ name: "256", value: "256" },
			{ name: "320", value: "320" },
		],
	},
	audioFilters: {},
}
