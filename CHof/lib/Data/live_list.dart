import 'package:flutter/material.dart';
import 'package:e_esg/models/live.dart';
import 'package:e_esg/api/api_Comsumer.dart';
import 'package:e_esg/api/end_points.dart';
import 'package:e_esg/models/doctor.dart';  

class LiveList {
  final ApiComsumer apiConsumer;

  LiveList({required this.apiConsumer});

  List<Live> thisWeekLives = [];
  List<Live> allLives = [];
  Map<Doctor, List<Live>> doctorLivesMap = {};  // Map to store lives by doctor

  Future<void> fetchLiveData() async {
    try {
      // Fetch all lives from the backend
      final response = await apiConsumer.get(
        EndPoints.GetAllLives,
        queryParameters: {}, // Add any query parameters if needed
        headers: {'Authorization': 'Bearer your_token_here'}, // Add headers if needed
      );
      
      // Parse the JSON response into a list of Live objects
      List<dynamic> liveJson = response.data;
      List<Live> liveSessions = liveJson.map((json) => Live.fromJson(json)).toList();

      // Separate the live sessions into this week and all lives
      DateTime now = DateTime.now();
      thisWeekLives = liveSessions.where((live) {
        return live.date.isAfter(now.subtract(Duration(days: now.weekday - 1))) &&
               live.date.isBefore(now.add(Duration(days: 7 - now.weekday)));
      }).toList();

      allLives = liveSessions;

      // Populate doctorLivesMap
      doctorLivesMap.clear();  // Clear the map before populating
      for (var live in liveSessions) {
        if (doctorLivesMap.containsKey(live.doctor)) {
          doctorLivesMap[live.doctor]!.add(live);
        } else {
          doctorLivesMap[live.doctor] = [live];
        }
      }

    } catch (e) {
      print('Error fetching live sessions: $e');
    }
  }
   // Méthode pour obtenir tous les lives
  List<Live> getLives() {
    List<Live> lives = <Live>[];
    lives.addAll(allLives);
    return lives;
  }

  // Méthode pour obtenir les lives d'un docteur spécifique
  List<Live> getLivesByDoctor(Doctor doctor) {
    return doctorLivesMap[doctor] ?? [];
  }
}
