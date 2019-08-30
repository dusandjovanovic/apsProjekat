const Graph = require("../models/graph");
const { validationResult, body, param } = require("express-validator");

exports.createGraph = function(graph, callback) {
	if (!graph.nodes && !graph.edges)
		graph = {
			nodes: [],
			edges: []
		};

	Graph.create(
		{
			nodes: graph.nodes,
			edges: graph.edges
		},
		function(error, object) {
			if (error) return callback(error);
			else return callback(null, object["_id"]);
		}
	);
};

exports.deleteGraph = function(id, callback) {
	Graph.deleteOne(
		{
			_id: id
		},
		function(error) {
			if (error) return callback(error);
			else return callback(null, true);
		}
	);
};

exports.validate = method => {
	switch (method) {
		case "/api/graph/get": {
			return [
				param("id")
					.exists()
					.isMongoId()
			];
		}
		case "/api/graph/post": {
			return [body("graph").exists()];
		}
		case "/api/graph/put": {
			return [
				param("id")
					.exists()
					.isMongoId(),
				body("graph").exists()
			];
		}
		default: {
			return [];
		}
	}
};

exports.get = function(request, response, next) {
	const validation = validationResult(request);
	if (!validation.isEmpty()) return next({ validation: validation.mapped() });

	const { id } = request.params;

	Graph.findOne({ _id: id }, function(error, graph) {
		if (error) return next(error);
		else
			response.json({
				success: true,
				data: graph
			});
	});
};

exports.post = function(request, response, next) {
	const validation = validationResult(request);
	if (!validation.isEmpty()) return next({ validation: validation.mapped() });

	let { graph } = request.body;
	exports.createGraph(graph, function(error) {
		if (error) return next(error);
		else
			response.json({
				success: true
			});
	});
};

exports.put = function(request, response, next) {
	const validation = validationResult(request);
	if (!validation.isEmpty()) return next({ validation: validation.mapped() });

	const { id } = request.params;
	const { graph } = request.body;

	Graph.update(
		{ _id: id },
		{ $set: { nodes: graph.nodes, edges: graph.edges } },
		function(error) {
			if (error) return next(error);
			else
				response.json({
					success: true
				});
		}
	);
};
