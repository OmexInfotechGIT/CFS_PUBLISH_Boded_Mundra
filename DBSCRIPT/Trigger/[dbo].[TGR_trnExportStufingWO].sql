USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Trigger [dbo].[TGR_trnExportStufingWO]    Script Date: 1/16/2024 10:06:06 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




CREATE TRIGGER [dbo].[TGR_trnExportStufingWO]
 ON  [dbo].[trnExportStufingWO]   
 
   AFTER INSERT,UPDATE  
   AS     
   DECLARE @Caption varchar(50)  
   
	IF EXISTS(SELECT * FROM Inserted)    
		IF EXISTS(SELECT * FROM Deleted)      
			set @Caption = 'Edit'  
		ELSE      
			set @Caption = 'Insert'    
			BEGIN     
			IF NOT EXISTS (
				SELECT *             FROM Inserted p              
					JOIN Deleted AS i              ON 
						p.[trnExportStufingWOID] = i.[trnExportStufingWOID]	and 
						p.[trnExportStufingWOPrefix] = i.[trnExportStufingWOPrefix] and 
						p.[trnExportStufingWONo] = i.[trnExportStufingWONo] and 
						p.[AgentID] = i.[AgentID] and 
						p.[AgentName] = i.[AgentName] and 
						p.[LineID] = i.[LineID] and 
						p.[LineName] = i.[LineName] and  
						p.[ConsolerID] = i.[ConsolerID] and 
						p.[ConsolerName] = i.[ConsolerName] and 
						p.[VesselPortID] = i.[VesselPortID] and  						
						p.[VesselPortNo] = i.[VesselPortNo] and  
						p.[ContractorID] = i.[ContractorID] and 
						p.[ContractorName] = i.[ContractorName] and 
						p.[SurveyorID]=i.[SurveyorID] and 
						p.[SurveyorName]=i.[SurveyorName] and
						p.[Remarks]=i.[Remarks]and 
						p.[IsFinished] = i.[IsFinished] and 
						p.[YearID] = i.[YearID] and 
						p.[Flagdeleted] = i.[Flagdeleted] 
						 
					)   
					BEGIN       
						SET NOCOUNT ON;       
						INSERT INTO [CFS_BONDED_WAREHOUSE_HISTORY].[dbo].[trnExportStufingWO_History]
								([trnExportStufingWOID],[trnExportStufingWOPrefix],[trnExportStufingWONo],[AgentID],[AgentName],[LineID],[LineName]
								,[ConsolerID],[ConsolerName],[VesselPortID],[VesselPortNo] ,[ContractorID],[ContractorName],[SurveyorID]
								,[SurveyorName],[Remarks],[IsFinished],[YearID] ,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy],[UpdatedDate],[Caption])
						
						
						SELECT	[trnExportStufingWOID],[trnExportStufingWOPrefix],[trnExportStufingWONo],[AgentID],[AgentName],[LineID],[LineName] 
								,[ConsolerID],[ConsolerName],[VesselPortID],[VesselPortNo] ,[ContractorID],[ContractorName]
							    ,[SurveyorID],[SurveyorName],[Remarks],[IsFinished],[YearID] ,[Flagdeleted],[Createdby],[CreatedDate],[UpdatedBy]
								,[UpdatedDate],@caption  FROM Inserted 
					END    
			END	


GO


