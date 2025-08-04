USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnExportStufingWO_History]    Script Date: 1/16/2024 10:07:27 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportStufingWO_History')
BEGIN
 DROP TABLE trnExportStufingWO_History
END
GO

CREATE TABLE [dbo].[trnExportStufingWO_History](
	[trnExportStufingWO_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportStufingWOID] [bigint] NOT NULL,
	[trnExportStufingWOPrefix] [varchar](max) NULL,
	[trnExportStufingWONo] [varchar](max) NULL,
	[AgentID] [int] NULL,
	[AgentName] [varchar](max) NULL,
	[LineID] [int] NULL,
	[LineName] [varchar](max) NULL,
	[ConsolerID] [int] NULL,
	[ConsolerName] [varchar](max) NULL,
	[VesselPortID] [int] NULL,
	[VesselPortNo] [varchar](max) NULL,
	[ContractorID] [int] NOT NULL,
	[ContractorName] [varchar](max) NOT NULL,
	[SurveyorID] [int] NOT NULL,
	[SurveyorName] [varchar](max) NOT NULL,
	[Remarks] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[IsFinished] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[caption] [varchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[trnExportStufingWO_HistoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportStufingWO_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportStufingWO_History] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


